import { memo } from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ReferenceLine,
    Cell,
} from 'recharts'

const CHART_DATA = [{name: 'one', value: 1}, {name: 'two', value: 2}, {name: 'three', value: -3}]

const COLORS_HISTOGRAM = ['orange', 'green', 'blue']
const ChartComponent = () => {

    const getCellStyle = (value) => {
        return value < 0 ? { clipPath: 'inset(2px 0 0 0)' } : { clipPath: 'inset(0 0 2px 0)' }
    }

    return (
                <div>
                    <BarChart barSize={30} data={CHART_DATA} height={430} width={154}>
                        <CartesianGrid color='#E0E1E9' strokeDasharray='0' vertical={false} />
                        <XAxis padding={{ left: 4 }} tickLine={false} ticks={['']} />
                        <YAxis
                            fontSize={15}
                            minTickGap={1}
                            strokeWidth={0.2}
                            tickCount={5}
                            tickLine={false}
                            tickMargin={15}
                        />
                        <ReferenceLine stroke='#4CAF50' strokeWidth={4} y={0} />
                        <Bar dataKey='value' minPointSize={2} stackId={1} width={30}>
                            {COLORS_HISTOGRAM.map((color, index) => {
                                const { value } = CHART_DATA[index]
                                const style = getCellStyle(value)
                                return <Cell key={color} fill={color} style={style} />
                            })}
                        </Bar>
                    </BarChart>
                </div>
    )
}

export const Chart = memo(ChartComponent)
