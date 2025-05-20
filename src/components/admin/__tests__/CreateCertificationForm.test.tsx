import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateCertificationForm from '../CreateCertificationForm';
import * as adminService from '../../../services/exams/adminService';

// Mock the adminService
jest.mock('../../../services/exams/adminService', () => ({
  createNewCertification: jest.fn()
}));

describe('CreateCertificationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(<CreateCertificationForm />);
    
    expect(screen.getByText('Add New Certification')).toBeInTheDocument();
    expect(screen.getByLabelText('Certification Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Provider')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Certification' })).toBeInTheDocument();
  });

  it('calls createNewCertification when form is submitted', async () => {
    const mockCreateNewCertification = adminService.createNewCertification as jest.Mock;
    mockCreateNewCertification.mockResolvedValueOnce({ id: '123', name: 'Test Cert' });
    
    const onCertificationCreated = jest.fn();
    render(<CreateCertificationForm onCertificationCreated={onCertificationCreated} />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Certification Name'), { target: { value: 'AWS Certified Developer' } });
    fireEvent.change(screen.getByLabelText('Provider'), { target: { value: 'Amazon Web Services' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Certification for AWS developers' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Create Certification' }));
    
    // Check if the service was called with correct parameters
    await waitFor(() => {
      expect(mockCreateNewCertification).toHaveBeenCalledWith({
        name: 'AWS Certified Developer',
        provider: 'Amazon Web Services',
        description: 'Certification for AWS developers'
      });
    });
    
    // Check if success message is displayed
    await waitFor(() => {
      expect(screen.getByText('Certification created successfully!')).toBeInTheDocument();
    });
    
    // Check if callback was called
    await waitFor(() => {
      expect(onCertificationCreated).toHaveBeenCalled();
    });
  });

  it('displays error message when creation fails', async () => {
    const mockCreateNewCertification = adminService.createNewCertification as jest.Mock;
    mockCreateNewCertification.mockRejectedValueOnce(new Error('API error'));
    
    render(<CreateCertificationForm />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Certification Name'), { target: { value: 'Test Cert' } });
    fireEvent.change(screen.getByLabelText('Provider'), { target: { value: 'Test Provider' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Create Certification' }));
    
    // Check if error message is displayed
    await waitFor(() => {
      expect(screen.getByText('Error: API error')).toBeInTheDocument();
    });
  });
});