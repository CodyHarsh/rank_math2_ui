import React, { useState } from 'react';
import apiService from '../services/apiService';

const JobForm = ({ onJobCreated }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setResponse(null);

        try {
            const res = await apiService.createJob(url);
            setResponse(res.data);
            onJobCreated(res.data.id);
            setUrl('');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to create job');
        }
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Submit a URL for Summarization</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={url} 
                            onChange={(e) => setUrl(e.target.value)} 
                            placeholder="Enter URL" 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Job</button>
                </form>
                {error && <p className="text-danger">{error}</p>}
                {response && (
                    <div className="mt-3">
                        <h3>Job Created</h3>
                        <pre className="bg-light p-3 rounded">{JSON.stringify(response, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobForm;
