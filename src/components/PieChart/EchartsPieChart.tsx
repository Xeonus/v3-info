import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
import Card from 'components/Card';
import { RowBetween } from 'components/Row';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import useTheme from 'hooks/useTheme';
import { formatDollarAmount } from '../../utils/numbers';
import ReactEcharts from "echarts-for-react"; 

dayjs.extend(utc);

const DEFAULT_HEIGHT = 300;

const Wrapper = styled(Card)`
  width: 100%;
  height: ${DEFAULT_HEIGHT}px;
  padding: 1rem;
  padding-right: 2rem;
  display: flex;
  background-color: ${({ theme }) => theme.bg0}
  flex-direction: column;
  > * {
    font-size: 1rem;
  }
`;

export interface Normal {
    color: string;
}

export interface ItemStyle {
    normal: Normal;
}

export interface echartsData {
    value: number;
    name: string;
    itemStyle: ItemStyle;
}


export type EchartsProps = {
    data: echartsData[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function EchartsPieChart (props: EchartsProps) {

const echartsDataArray = {} as echartsData[];

const dataNames = props.data.map(i => i.name);
    //Chart style
const style = {
    height: "400px",
    width: "100%",
  };
  
  //Chart options
  const option = {
    backgroundColor: "rgb(43, 51, 59)",
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true
        },
        magicType: {
          show: true,
          type: ["pie", "funnel"]
        },
        restore: {
          show: true,
          title: "Restore"
        },
        saveAsImage: {
          show: true,
          title: "Save Image"
        }
      }
    },
    // Hover Tooltip
    // {a} = series:[{name:}]
    // {b} = series:[{data: [{name:}]}]
    // {c} = series:[{data: [{value:}]
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/><strong>{b}</strong>: ${c}"
    },
    calculable: true,
    legend: {
      icon: "circle",
      top: "bottom",
      data: dataNames,
      textStyle: {
        color: "#fff"
      }
    },
    series: [
        {
          name: 'Total asset fraction',
          type: 'pie',
          radius: '50%',
          data: props.data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]

  };

    return (
        <ReactEcharts 
        option={option} 
        style={style} 
        className="pie-chart" 
        />
    );
}