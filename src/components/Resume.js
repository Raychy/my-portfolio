import React from 'react';

const ResumeViewer = ({ fileUrl }) => {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <iframe
        src={`${fileUrl}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Resume Viewer"
      ></iframe>
    </div>
  );
};

export default ResumeViewer;
