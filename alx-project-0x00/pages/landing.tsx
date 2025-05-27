import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />

            <h2>Button Component</h2>

            <h3>Sizes</h3>
            <div className="flex gap-2">
                <Button styles="text-sm px-3 py-1 bg-gray-200 rounded" title="Small" />
                <Button styles="text-base px-4 py-2 bg-gray-300 rounded" title="Medium" />
                <Button styles="text-lg px-5 py-3 bg-gray-400 rounded" title="Large" />
            </div>

            <h3>Shapes</h3>
            <div className="flex gap-2 mt-4">
                <Button styles="rounded-sm bg-blue-200 px-4 py-2" title="rounded small" />
                <Button styles="rounded-md bg-blue-300 px-4 py-2" title="rounded medium" />
                <Button styles="rounded-full bg-blue-400 px-4 py-2" title="rounded full" />
            </div>
        </div>
    );
};

export default Landing;