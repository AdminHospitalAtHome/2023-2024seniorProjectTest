import {LineChart} from 'react-native-chart-kit';

import {View} from 'react-native';

import {useState} from 'react';
import Svg, {Text as TextSVG} from 'react-native-svg';

export default function DoubleLineChart({
  data,
  unit,
  width,
  height,
}: {
  data: any;
  unit: string;
  width: number;
  height: number;
}): JSX.Element {
  const chartData1: number[] = [];
  const chartData2: number[] = [];

  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    index: 0,
    value: '',
  });

  const dates: number[] = [];

  if (data) {
    // for (let i = 0; i < data.length; i++) {
    //   chartData1.push(data[i][1]);
    //   chartData2.push(data[i][2]);
    //   dates.push(data[i][0]);
    // }

    data.forEach((i): void => {
      chartData1.push(i[1]);
      chartData2.push(i[2]);
      dates.push(i[0]);
    });

    return (
      <LineChart
        data={{
          datasets: [
            {
              data: chartData1,
              color: opacity => `rgba(0,0,0, ${0.7})`,
              strokeWidth: 3,
            },
            {
              data: chartData2,
              color: opacity => `rgba(0, 0, 0, ${0.5})`,
              strokeWidth: 3,
            },
          ],
        }}
        width={width}
        height={height}
        yAxisSuffix={unit}
        yAxisInterval={1} // optional, defaults to 1
        //withDots={false}
        chartConfig={{
          backgroundGradientFrom: '#f5f7fa',
          backgroundGradientTo: '#c3cfe2',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 10,
            paddingRight: 20, // Add some padding to the right
            paddingLeft: 20,
          },
          propsForLabels: {
            fontSize: 10,
          },
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier={false}
        withShadow={false}
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
        decorator={() => {
          let strArr: string[] = [];
          if (tooltipPos.visible) {
            strArr = tooltipPos.value.split('\n');
          }
          let flag: number = 0;
          // console.log(chartData);
          let largest: number;
          largest = Math.max(...chartData1);
          let smallest: number;
          smallest = Math.min(...chartData2);
          let median: number;
          median = (largest + smallest) / 2;
          if (Number(strArr[0]) <= median) {
            flag = -60;
          } else {
            flag = 30;
          }
          let flag2: number = 0;
          if (tooltipPos.index >= chartData1.length * 0.8) {
            flag2 = -10;
          }

          return tooltipPos.visible ? (
            <View>
              <Svg>
                {strArr.map((str, index) => (
                  <TextSVG
                    key={index} // Don't forget to add a unique key
                    x={tooltipPos.x + 5 + flag2}
                    y={tooltipPos.y + flag + index * 15} // Adjust the y position based on the index
                    fill="#808080"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle">
                    {str}
                  </TextSVG>
                ))}
              </Svg>
            </View>
          ) : null;
        }}
        onDataPointClick={data => {
          // console.log(dates[data.index]);
          let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;
          isSamePoint
            ? setTooltipPos(previousState => {
                return {
                  ...previousState,
                  value: data.value + '\n' + dates[data.index],
                  index: data.index,
                  visible: !previousState.visible,
                };
              })
            : setTooltipPos({
                x: data.x,
                value: data.value + '\n' + dates[data.index],
                y: data.y,
                index: data.index,
                visible: true,
              });
        }}
      />
    );
  } else {
    return <View />;
  }
}
