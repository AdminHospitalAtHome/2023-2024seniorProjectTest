import timeTableParser from './tableTimeParser';

export function addBloodPressure(
  patientID,
  SystolicBloodPressureInMmHg,
  DiastolicBloodPressureInMmHg,
  IfManualInput,
) {
  const promise: Promise<any> = new Promise((resolve, reject) => {
    const dateTime: String = new Date().toISOString();
    fetch(
      'https://hosptial-at-home-js-api.azurewebsites.net/api/addBloodPressure',
      {
        method: 'POST',
        body: `{"PatientID": ${patientID}, "DateTimeTaken": "${dateTime}", "SystolicBloodPressureInMmHg": ${SystolicBloodPressureInMmHg},"DiastolicBloodPressureInMmHg": ${DiastolicBloodPressureInMmHg}, "IfManualInput": ${IfManualInput}}`,
      },
    ).then(response => {
      console.log(response.status);
      if (response.status === 201) {
        resolve('add successful');
      } else {
        reject('failed to add blood pressure');
      }
    });
  });
  return promise;
}

export function getBloodPressure(patientID, startDateTime, stopDateTime) {
  return fetch(
    `https://hosptial-at-home-js-api.azurewebsites.net/api/getBloodPressure?patientID=${patientID}&startDateTime=${startDateTime}&stopDateTime=${stopDateTime}`,
  )
    .then(response => response.json())
    .then(json => parseBloodPressureData(json));
}

function parseBloodPressureData(bloodPressureJSON) {
  let bloodPressureArr = [];
  for (var i = 0; i < bloodPressureJSON.length; i++) {
    bloodPressureArr.push([
      timeTableParser(bloodPressureJSON[i].DateTimeTaken),
      bloodPressureJSON[i].SystolicBloodPressureInMmHg,
      bloodPressureJSON[i].DiastolicBloodPressureInMmHg,
    ]);
  }
  return bloodPressureArr;
}