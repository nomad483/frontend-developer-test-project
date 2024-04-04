import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Header } from 'app/ds'

import { TaskItemView } from 'app/widgets/TasksList/TaskItemView'

import { Task } from 'app/types/Task'
import styles from './TasksListView.styles'

interface Props {
  tasks: Task[]
  onTaskPress: (task: Task) => void
  projectHeader?: string
}

export const TasksListView: React.FC<Props> = ({
  tasks,
  onTaskPress,
  projectHeader = 'All Tasks'
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Task }) => <TaskItemView task={item} onPress={onTaskPress} />,
    [onTaskPress]
  )

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={<Header mb={12}>{projectHeader}</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
