import type { Contenttype } from "./types";
import { use, useState } from "react";
import Select from "./select";
interface ContentProps {
    promiseTools: Promise<Contenttype[]>;
}

const content = ({ promiseTools }: ContentProps) => {

    const tools = use(promiseTools);
    const [selectedTools, setSelectedTools] = useState<Contenttype[]>([]);



    return (<>
        <div className="container mx-auto">

            <div>
                <p className="font-bold text-4xl">Explore The <span className="text-fuchsia-500">Technologies </span>  </p>
                <p className="">Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className="mt-8 flex h-auto flex-col gap-4 md:grid md:h-[calc(300vh-120px)] md:grid-cols-[minmax(0,1fr)_280px]">
                <div className="min-h-0 overflow-y-auto pr-2">
                    <Select
                        tools={tools}
                        selectedToolIds={selectedTools.map((tool) => tool.id)}
                        onAddTool={(tool) => setSelectedTools((currentTools) =>
                            currentTools.some((selectedTool) => selectedTool.id === tool.id)
                                ? currentTools
                                : [...currentTools, tool]
                        )}
                    />
                </div>
                <div className="h-fit w-full rounded-lg border border-gray-200 p-4 md:w-auto">
                    <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

                    <p>
                        {selectedTools.length === 0
                            ? "No Technologies Selected Yet."
                            : `${selectedTools.length} Technologies Selected`}
                    </p>
                    <div>
                        {selectedTools.map((tool) => (
                            <div key={tool.id} className="flex items-center justify-between gap-4 border-b border-gray-200 p-4">
                                <div className="flex items-center gap-4">
                                    <img className="h-12 w-12" src={tool.icon} alt={tool.name} />
                                    <div>
                                        <h3 className="text-lg font-bold">{tool.name}</h3>
                                        <p className="text-sm text-gray-500">{tool.category}</p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedTools((currentTools) =>
                                        currentTools.filter((selectedTool) => selectedTool.id !== tool.id)
                                    )}
                                    
                                    className="text-2xl leading-none text-gray-400 hover:text-red-500"
                                >
                                    ×
                                </button>
                            </div>

                        ))}

                        {selectedTools.length !== 0 && (
                            <button
                                onClick={() => setSelectedTools([])}
                                className="w-full rounded-lg bg-red-500 px-4 py-2 text-white"
                            >
                                Remove All
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default content;