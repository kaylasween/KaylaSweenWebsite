import React from 'react'
import Layout from '../components/Layout'

const UsesPage = () => (
    <Layout>
        <h1>Things I use</h1>
        <p>Hardware</p>
        <ul>
            <li>2017 Macbook Pro 15"</li>
            <li>Razer Mercury Edition clackity clack</li>
            <li>Razer Mercury Edition some mouse</li>
        </ul>
        <p>Text Editors/IDEs</p>
        <ul>
            <li>VS Code</li>
            <ul>
                <li>Theme: Synthwave '84 with glow.</li>
            </ul>
            <li>IntelliJ (at work)</li>
        </ul>
        <p>Design</p>
        <ul>
            <li>Adobe XD</li>
        </ul>
        <p>Organization</p>
        <ul>
            <li>Trello</li>
        </ul>
        <p>Etc</p>
        <ul>
            <li>Spotify</li>
            <li>Desk: Ikea sit/stand thing</li>
        </ul>
    </Layout>
)

export default UsesPage