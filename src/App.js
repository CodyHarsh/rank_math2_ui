import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobStatus from './components/JobStatus';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [jobId, setJobId] = useState(null);

    const handleJobCreated = (id) => {
        setJobId(id);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Summarization Service</h1>
            <JobForm onJobCreated={handleJobCreated} />
            <JobStatus />
        </div>
    );
}

export default App;
