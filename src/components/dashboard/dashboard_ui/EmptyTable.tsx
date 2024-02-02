import { GrNote } from "react-icons/gr";

export default function EmptyTable() {
    return (
        <div className="flex flex-col items-center justify-center my-10 text-gray-300">
            <GrNote className="text-3xl  mb-4" />
            <p>No Data found!!</p>
        </div>
    )
}


