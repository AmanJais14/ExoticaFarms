'use client'

import { useState } from 'react';

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const testEmail = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: 'Test User',
          email: 'test@example.com',
          phone: '+91 9876543210',
          investmentInterest: '2-3 acre',
          slotDateTime: '2024-12-15T10:00',
          notes: 'This is a test submission to verify email functionality.',
          submissionId: 'test-' + Date.now(),
        }),
      });

      const data = await response.json();
      setResult({
        success: response.ok,
        data: data,
        status: response.status,
      });
    } catch (error) {
      setResult({
        success: false,
        error: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Email Test Page
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={testEmail}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {isLoading ? 'Sending Test Email...' : 'Send Test Email'}
          </button>

          {result && (
            <div className={`p-4 rounded-lg ${
              result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <h3 className={`font-semibold ${
                result.success ? 'text-green-800' : 'text-red-800'
              }`}>
                {result.success ? '✅ Success' : '❌ Error'}
              </h3>
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>From:</strong> ajamanjaiz14@gmail.com</p>
            <p><strong>To:</strong> aman.jaiswal@cmr.edu.in</p>
            <p><strong>Note:</strong> This will send a test email to verify the configuration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
