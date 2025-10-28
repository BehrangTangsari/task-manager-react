import React from 'react'
import Header from '../components/Header'
import Container from '../components/TaskForm'
import TaskList from '../components/task/TaskList'


export default function Home() {
    return (
        <Container>
            <div className="card-glass p-6">
                <Header />
                <TaskList />
            </div>
        </Container>
    )
}