import {LineChart} from 'react-native-chart-kit';
import {View} from 'react-native';
import React, {useState} from 'react';
import Svg, {Text as TextSVG} from 'react-native-svg';
import {ChartStyles} from './Styles';
import {onDataPointClick} from '../../BackEndFunctionCall/chartLogic';

export default function SingleLineChart({
  data,
  unit,
  width,
  height,
  decimalPlaces,
}: {
  data: any;
  unit: string;
  width: number;
  height: number;
  decimalPlaces: number;
}): React.JSX.Element {
  const chartData: number[] = [];

  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    index: 0,
    value: '',
  });

  const dates: number[] = [];

  if (data) {
    data.forEach((i: any): void => {
      chartData.push(i[1]);
      dates.push(i[0]);
    });

    return (
      <View>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: chartData,
                color: () => 'black',
                strokeWidth: 3,
              },
            ],
          }}
          width={width}
          height={height}
          yAxisSuffix={unit}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#f5f7fa',
            backgroundGradientTo: '#c3cfe2',
            decimalPlaces: decimalPlaces, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black label color
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 10,
            },
            propsForDots: {
              r: '5',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={ChartStyles.chart}
          bezier={false}
          withShadow={false}
          // eslint-disable-next-line react/no-unstable-nested-components
          decorator={() => {
            let strArr: string[] = [];
            if (tooltipPos.visible) {
              strArr = tooltipPos.value.split('\n');
            }
            let flag: number = 0;
            let largest: number;
            largest = Math.max(...chartData);
            let smallest: number;
            smallest = Math.min(...chartData);
            let median: number;
            median = (largest + smallest) / 2;
            if (Number(strArr[0]) <= median) {
              flag = -60;
            } else {
              flag = 30;
            }
            let flag2: number = 0;
            if (tooltipPos.index >= chartData.length * 0.8) {
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
          onDataPointClick={dataPoint => {
            onDataPointClick(dataPoint, tooltipPos, setTooltipPos, dates);
          }}
        />
      </View>
    );
  } else {
    return <View />;
  }
}
