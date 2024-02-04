'use client'

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


export default function BarChart() {
    const chartRef = useRef(null);
    useEffect(() => {
        if (!chartRef.current) return;

        var config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "blue",
                        borderColor: "blue",
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "orange",
                        borderColor: "orange",
                        data: [40, 68, 86, 74, 56, 60, 87],
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 2,
                        fill: false,
                        backgroundColor: "red",
                        borderColor: "red",
                        data: [80, 28, 98, 24, 67, 40, 10],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "red",
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        //@ts-ignore
        const ctx = chartRef.current.getContext("2d");
        //@ts-ignore
        window.myLine = new Chart(ctx, config);
        return () => {
            // Cleanup on component unmount
            //@ts-ignore
            window.myLine.destroy();
        };
    }, [chartRef]);
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded bg-blueGray-700">
                <div className="p-4  flex-auto bg-white  rounded-lg ">
                    <h1 className="text-xl mb-3">Total Sales and Costs</h1>
                    <div className="relative h-[250px] ">
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}