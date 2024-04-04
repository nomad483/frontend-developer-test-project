import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksListView } from 'app/widgets/TasksList'

import { PROJECTS } from 'app/mock/data'
import styles from './App.styles'
import { Task } from 'app/types/Task'

function App() {
  const [projects, setProjects] = useState(PROJECTS)
  const [selectedProjectName, setSelectedProjectName] = useState<string | null>(null)
  // const [tasks, setTasks] = useState<Task[]>(PROJECTS.flatMap(project => project.tasks))

  const tasks = useMemo(
    () =>
      selectedProjectName
        ? projects.find(project => project.name == selectedProjectName)?.tasks!
        : projects.flatMap(project => project.tasks),
    [selectedProjectName, projects]
  )

  const onProjectPress = useCallback(
    (project: Project) => {
      setSelectedProjectName(prevSelectedProjectName =>
        prevSelectedProjectName === project.name ? null : project.name
      )
    },
    [selectedProjectName, projects]
  )

  const onTaskPress = useCallback(
    (task: Task) => {
      setProjects(prevProjects =>
        prevProjects.map(prevProject => {
          const updatedTasks = prevProject.tasks.map(prevTask =>
            prevTask.name === task.name ? { ...prevTask, completed: !prevTask.completed } : prevTask
          )
          return { ...prevProject, tasks: updatedTasks }
        })
      )
    },
    [projects]
  )

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView projects={projects} onProjectPress={onProjectPress} />
      </View>
      <View style={styles.column}>
        <TasksListView tasks={tasks} onTaskPress={onTaskPress} />
      </View>
    </View>
  )
}

export default App
