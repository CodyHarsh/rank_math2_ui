import React, { useState } from 'react';
import apiService from '../services/apiService';

const JobStatus = () => {
    const [jobId, setJobId] = useState('');
    const [jobStatus, setJobStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchStatus = async () => {
        setError(null);
        setJobStatus(null);

        try {
            const response = await apiService.getJobStatus(jobId);
            setJobStatus(response.data);
        } catch (err) {
            setError('Failed to fetch job status');
        }
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h3 className="card-title">Fetch Job Status by ID</h3>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={jobId} 
                        onChange={(e) => setJobId(e.target.value)} 
                        placeholder="Enter Job ID" 
                        required 
                    />
                    <button className="btn btn-success" onClick={handleFetchStatus}>Get Job Status</button>
                </div>

                {error && <p className="text-danger">{error}</p>}
                {jobStatus && (
                    <div className="mt-3">
                        <h3>Job Status</h3>
                        <pre className="bg-light p-3 rounded">{JSON.stringify(jobStatus, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobStatus;
