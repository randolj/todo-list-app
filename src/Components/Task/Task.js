import React from 'react'
import "./Task.css"

import { useSortable } from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import KebabMenu from '../KebabMenu/KebabMenu'

export const Task = ({id, title, onDelete}) => {

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),

    };

  return (
    <div className='task-container'>
      <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>
        <input type='checkbox' className='checkbox' />
        {title}
      </div>
      <div className='kebab-menu'>
        <KebabMenu onDelete={onDelete}/>
      </div>
    </div>
  )
}
