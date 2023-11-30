package edu.rosehulman.hospitalathomedemo;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

import android.icu.util.Measure;
import android.util.Log;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.medm.devicekit.*;

public class DeviceManager extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;
    private ArrayList<IDeviceDescription> pairableDevices = new ArrayList<>();

    private Callback newDeviceCallBack = null;
    private ScannerStopToken stopToken = null;

    private int newDeviceDetectedListeners = 0;

    DeviceManager(ReactApplicationContext context) {
        super(context);
        this.context = context;

    }

    @Override
    public String getName() {
        return "MedMDeviceManager";
    }

    @ReactMethod
    public void startDeviceScan() {
        Log.d("MedMDeviceManager", "Start Scan");

        if (MedMDeviceKit.isInitialized()) {
            Log.d("MedMDeviceManager", "Initialized in StartScanDevice");
        }
        MedMScanner scanner = MedMDeviceKit.getScanner();
        IScannerCallback callback = new HospitalAtHomeScannerCallback(this);
        scanner.setCallback(callback);
        IErrorCallback errorCallback = new HospitalAtHomeScannerIErrorCallback();
        scanner.setErrorCallback(errorCallback);



        stopToken = scanner.start();
    }
    public void addPairableDevice(IDeviceDescription iDeviceDescription) {
        boolean isIn = false;

        for (IDeviceDescription i: pairableDevices) {
            if (i.getAddress().equals(iDeviceDescription.getAddress())) {
                isIn = true;
                break;
            }
        }
        if (!isIn) {
            pairableDevices.add(iDeviceDescription);
            Log.d("MedMDeviceManagaer", iDeviceDescription.getAddress());
            Log.d("MedMDeviceManager", "New ADDED");
            Log.d("MedMDeviceManager", ""+pairableDevices.size());
            WritableMap params= Arguments.createMap();
            params.putString("pairableDevices", JsonParser.toJson(pairableDevices));
            sendNewDeviceDetectedEvent(context, "New_Device", params);
        }

    }

    private void sendNewDeviceDetectedEvent(ReactContext reactContext, String eventName, WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @ReactMethod
    public void addNewDeviceDetectedListener(String eventName) {
        newDeviceDetectedListeners += 1;
    }


    @ReactMethod
    public void pairableDeviceList(Promise promise){
        Log.d("MedMDeviceManager", JsonParser.toJson(pairableDevices));
        promise.resolve(JsonParser.toJson(pairableDevices));

    }

    // Returns Promise<Boolean> with True if it is stopped and False if it didnt stop
    @ReactMethod
    public void stopDeviceScan(Promise promise){
        pairableDevices.clear();
        if(stopToken != null && !stopToken.isStopped() && !stopToken.isScanFinished()){
            stopToken.stopScan();
            Log.d("MedMDeviceManager", "Scanning Stopped");
            promise.resolve(true);
        }
        promise.resolve(false);

    }

    @ReactMethod
    public void init(){
        try {
            MedMDeviceKit.init(context.getCurrentActivity().getApplication(),BuildConfig.SECRET);
        } catch(Exception e) {
            Log.e("MedMDeviceManager", e.toString());
        }

        if (MedMDeviceKit.isInitialized()) {
            Log.d("MedMDeviceManager", "Initialized in init");
        }
    }


    @ReactMethod
    public void getPairedDevices(Promise promise) {
        MedMDeviceManager deviceManager = MedMDeviceKit.getDeviceManager();
        Log.d("MedMDeviceManager", "GETTING PAIRED DEVICES");
        Log.d("MedMDeviceManager", JsonParser.toJson(deviceManager.getDevicesList()));
        promise.resolve(JsonParser.toJson(deviceManager.getDevicesList()));
    }

    @ReactMethod
    public void pairDevice(String address) {
        MedMDeviceManager deviceManager = MedMDeviceKit.getDeviceManager();
        for (IDeviceDescription i: pairableDevices) {
            if (i.getAddress().equals(address)) {
                // TODO: Change PIN to Dynamic
                deviceManager.addDevice(i, new HospitalAtHomeAddDeviceCallback(this));
                break;
            }
        }

    }

    //
    public void onDevicePair(Boolean success, IDeviceDescription device) {
        WritableMap params= Arguments.createMap();
        params.putString("pairedDevice", JsonParser.toJson(pairableDevices));
        params.putString("success", String.valueOf(success));
        sendNewDeviceDetectedEvent(context, "Pair_Device", params);
    }

    @ReactMethod
    public void setDeviceFilter(String address, Promise promise) {
        MedMCollector collector = MedMDeviceKit.getCollector();
        MedMDeviceManager deviceManager = MedMDeviceKit.getDeviceManager();
        for (IDeviceDescription device : deviceManager.getDevicesList()) {
            if (device.getAddress() == address) {
                IDeviceDescription tmp[] = {device};
                collector.setDeviceFilter(tmp);
                promise.resolve(null);
                return;
            }
        }
        promise.reject("", "");

    }

    //TODO: RSSI will always be -1 so we will need a better method to do this!!!! We will do this by using android api for bluetooth. THis will mean we are not doing default devices right now
    @ReactMethod
    public void strongestSignalDevice(String deviceType, Promise promise) {
        MedMDeviceManager deviceManager = MedMDeviceKit.getDeviceManager();
        IDeviceDescription deviceList[] = deviceManager.getDevicesList();
        Log.d("MEDMDeviceManager", JsonParser.toJson(deviceList));
        // The strongest signal is the largest number
        int strongestSignal = Integer.MIN_VALUE;
        int indexOfStrongestSignal = -1;
        for (int i = 0; i < deviceList.length; i++) {
            List<MeasurementType> types = deviceList[i].getMeasurementTypes();
            Log.d("MEDMDeviceManager",types.toString());
            if(types.contains(MeasurementType.valueOf(deviceType))){
                if(deviceList[i].getRssi() > strongestSignal) {
                    Log.d("MEDMDeviceManager", String.valueOf(MeasurementType.valueOf(deviceType)));
                    indexOfStrongestSignal = i;
                    strongestSignal = deviceList[i].getRssi();
                    Log.d("MEDMDeviceManager", "RSSI: " + String.valueOf(strongestSignal));
                    Log.d("MEDMDeviceManager", "Index: " + String.valueOf(indexOfStrongestSignal));
                }

            }
        }

        if (indexOfStrongestSignal == -1){
            Log.d("MEDMDeviceManager", "Rejected");
            promise.reject("",""); // TODO: Figure out what these strings are supposed to be....
        }else{
            promise.resolve(JsonParser.toJson(deviceList[indexOfStrongestSignal]));
        }




    }
}