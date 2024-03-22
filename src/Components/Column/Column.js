import React from "react";
import "./Column.css";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Task } from "../Task/Task";

export const Column = ({tasks, onDeleteTask}) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (
                    <Task onDelete={() => onDeleteTask(task.id)} id={task.id} title={task.title} key={task.id} />
                ))}
            </SortableContext>
    </div>
    );
}