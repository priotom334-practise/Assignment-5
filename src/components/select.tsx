import type { Contenttype } from "./types";

interface SelectProps {
    tools: Contenttype[];
    selectedToolIds: string[];
    onAddTool: (tool: Contenttype) => void;
}

const select = ({ tools, selectedToolIds, onAddTool }: SelectProps) => {
    console.log("tools", tools);


    return (

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {
                tools.map((tool: Contenttype) => {
                    const isSelected = selectedToolIds.includes(tool.id);
                    return (

                        <div key={tool.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex items-center justify-between gap-4 p-4">
                                    <img className="w-16 h-16" src={tool.icon} alt="" />
                                    <p>{tool.badge}</p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold">{tool.name}</h2>
                                </div>

                                <div>
                                    <p>{tool.description}</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between gap-4 p-4">
                                    <p>{tool.category}</p>
                                    <p>{tool.difficulty}</p>
                                    <p>{tool.rating}</p>
                                </div>
                                <div className="flex items-center justify-between gap-4 p-4">
                                    <button
                                        type="button"
                                        onClick={() => onAddTool(tool)}
                                        disabled={isSelected}
                                        className="btn btn-primary h-10 w-full rounded-lg bg-[#0b1220] text-[9px] font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-70"
                                    >
                                        {isSelected ? "Added to Stack" : "Add to Stack"}
                                    </button>
                                </div>
                            </div>
                        </div>





                    )
                })
            }
        </div>
    )
}

export default select;