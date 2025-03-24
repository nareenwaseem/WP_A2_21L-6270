import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DraggableProjectList = ({ projects, setProjects }) => {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedProjects = [...projects];
        const [movedItem] = reorderedProjects.splice(result.source.index, 1);
        reorderedProjects.splice(result.destination.index, 0, movedItem);
        setProjects(reorderedProjects);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="projects">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {projects.map((project, index) => (
                            <Draggable key={project.title} draggableId={project.title} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DraggableProjectList;
