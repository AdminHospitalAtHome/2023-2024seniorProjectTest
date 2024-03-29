module.exports = async function (context, req, manualAlertTriggersIn) {

    context.log(req.body.JsonData)

    context.log(manualAlertTriggersIn.length)
    if (manualAlertTriggersIn.length === 1) {
        context.log("AAHA", manualAlertTriggersIn[0].UniqueID)
        context.log("manual trigger", manualAlertTriggersIn[0])
        const newAlertTrigger = {
            // "UniqueID": manualAlertTriggersIn[0].UniqueID,
            "PatientID": manualAlertTriggersIn[0].PatientID,
            "Weight_Level": manualAlertTriggersIn[0].Weight_Level,
            "Should_Trigger_Weight": manualAlertTriggersIn[0].Should_Trigger_Weight,
            "Heart_Rate_Level": manualAlertTriggersIn[0].Heart_Rate_Level,
            "Should_Trigger_Heart_Rate": manualAlertTriggersIn[0].Should_Trigger_Heart_Rate,
            "Blood_Oxygen_Level": manualAlertTriggersIn[0].Blood_Oxygen_Level,
            "Should_Trigger_Blood_Oxygen": manualAlertTriggersIn[0].Should_Trigger_Blood_Oxygen,
            "Blood_Pressure_Level": manualAlertTriggersIn[0].Blood_Pressure_Level,
            "Should_Trigger_Blood_Pressure": manualAlertTriggersIn[0].Should_Trigger_Blood_Pressure,
            "Spirometry_Level": manualAlertTriggersIn[0].Spirometry_Level,
            "Should_Trigger_Spirometry": manualAlertTriggersIn[0].Should_Trigger_Spirometry,
            "Custom_Alert_Levels": JSON.stringify(req.body.JsonData),
        }

        // "Spirometry_Level": manualAlertTriggersIn[0].Spirometry_Level,
        // "Should_Trigger_Spirometry": manualAlertTriggersIn[0].Should_Trigger_Spirometry,

        context.bindings.manualAlertTriggersOut = JSON.stringify(newAlertTrigger);
    } else {
        const newAlertTrigger = {
            "PatientID": req.query.PatientID,
            "Weight_Level": -1,
            "Should_Trigger_Weight": 0,
            "Heart_Rate_Level": -1,
            "Should_Trigger_Heart_Rate": 0,
            "Blood_Oxygen_Level": -1,
            "Should_Trigger_Blood_Oxygen": 0,
            "Blood_Pressure_Level": -1,
            "Should_Trigger_Blood_Pressure": 0,
            "Spirometry_Level": -1,
            "Should_Trigger_Spirometry": 0,
            "Custom_Alert_Levels": JSON.stringify(req.body.JsonData),
        }

        context.bindings.manualAlertTriggersOut = JSON.stringify(newAlertTrigger);
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: req.body.JsonData
    };
}
