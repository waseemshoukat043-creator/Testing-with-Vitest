
import React from "react";

export default function Task({ title }) {
  return (
    <div>
      <h2>Task Manager</h2>
      <p data-testid="task-title">{title}</p>
    </div>
  );
}
