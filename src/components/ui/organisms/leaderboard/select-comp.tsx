"use client";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/organisms/select";

type Stack = { name: string,id:number };

interface SelectComponentProps {
    stack: Stack[];
}

export default function SelectComponent({ stack }: SelectComponentProps) {
    return (
        <Select onValueChange={(value) => console.log("Selected:", value)}>
            <SelectTrigger className="sm:w-42 w-34 sm:text-sm text-xs">
                <SelectValue placeholder="Choose a stack" />
            </SelectTrigger>
            <SelectContent>
                {stack.map((stacks, index) => (
                    <SelectItem value={stacks.name} key={index}>
                        {stacks.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
