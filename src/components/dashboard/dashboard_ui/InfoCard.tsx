import { Md10K } from "react-icons/md";

interface InfoCartType {
    title: string;
    subTitle?: string;
    count: number;
    icon: any;
}
export default function InfoCard({ title, subTitle, count, icon }: InfoCartType) {
    return (
        <div className="bg-white rounded-lg py-3 w-full">
            <h1 className="font-medium  px-4">{title}</h1>
            <hr className="my-1" />
            <div className="flex gap-5 justify-between  px-4 py-2">
                <p className="text-5xl"> {icon}</p>
                <div className="text-end">
                    <h1 className="text-3xl">{count}</h1>
                    <h1>{subTitle}</h1>
                </div>
            </div>
        </div>
    )
}
