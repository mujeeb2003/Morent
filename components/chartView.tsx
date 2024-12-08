"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
    const data = {
        labels: ["Sport Car", "SUV", "Coupe", "Hatchback", "MPV"],
        datasets: [
            {
                data: [17349, 9478, 18197, 12150, 14406],
                backgroundColor: [
                    "#D6E4FD",
                    "#AEC8FC",
                    "#85A8F8",
                    "#3563E9",
                    "#264BC8",
                    "#102587",
                ],
                borderWidth: 0,
                borderColor: "#fff",
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Use display property instead of just false
            },
            tooltip: {
                enabled: false,
            },
        },
        cutout: "90%",
        maintainAspectRatio: false,
    };

    return (
        <div className="relative h-[200px] w-full flex">
            <div className="relative w-1/2">
                <Pie data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">
                        {data.datasets[0].data.reduce(
                            (sum, value) => sum + value,
                            0
                        )}
                    </span>
                </div>
            </div>
            <div className="w-1/2 flex px-4 flex-col justify-center">
                {data.labels.map((label, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <div
                            className="w-3 h-3 mr-2 rounded-full"
                            style={{
                                backgroundColor:
                                    data.datasets[0].backgroundColor[index],
                            }}
                        ></div>
                        <span className="text-sm">{label}</span>
                        <span className="ml-auto">
                            {data.datasets[0].data[index]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartComponent;
