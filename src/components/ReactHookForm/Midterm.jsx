import { useForm } from 'react-hook-form';
import './midterm.css';

function EmployeeForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const message = `
      First Name: ${data.firstName}
      Last Name: ${data.lastName}
      Email ID: ${data.email}
      Mobile Number: ${data.mobileNumber}
      Qualification: ${data.qualification}
    `;

    alert(message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Employee Registration Form</h2>
      <div className="form-container">
        <div>
          <div className="label-input-container">
            <label htmlFor="firstName">First Name</label>
            <input type='text' className='yes'
              {...register('firstName', {
                required: 'First name is required',
                minLength: {
                  value: 5,
                  message: 'First name must be at least 5 characters',
                },
              })}
            />
            <label>(Minimum 5 char)</label>
          </div>
          <span>{errors.firstName && errors.firstName.message}</span>
        </div>
        <div>
          <div className="label-input-container">
            <label htmlFor="lastName">Last Name</label>
            <input type='text' {...register('lastName', { required: 'Last name is required' })} />
          </div>
          <span>{errors.lastName && errors.lastName.message}</span>
        </div>
        <div>
          <div className="label-input-container">
            <label htmlFor="email">Email ID</label>
            <input type='text'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          <span>{errors.email && errors.email.message}</span>
        </div>
        <div>
          <div className="label-input-container">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type='text'
              {...register('mobileNumber', {
                required: 'Mobile number is required',
              })}
            />
          </div>
          <span>{errors.mobileNumber && errors.mobileNumber.message}</span>
        </div>
        <div className="qualification-container">
          <label>Qualification</label>
          <div>
            <label>
              <input
                type="radio"
                {...register('qualification', { required: 'Qualification is required' })}
                value="High School(10th)"
              />
              High School(10th)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('qualification', { required: 'Qualification is required' })}
                value="High School(12th)"
              />
              High School(12th)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('qualification', { required: 'Qualification is required' })}
                value="Graduation(Bachelors)"
              />
              Graduation(Bachelors)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('qualification', { required: 'Qualification is required' })}
                value="Post Graduation(Masters)"
              />
              Post Graduation(Masters)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('qualification', { required: 'Qualification is required' })}
                value="Others"
              />
              Other
            </label>
          </div>
        </div>
        <span>{errors.qualification && errors.qualification.message}</span>
        <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </div>
      </div>
      
    </form>
  );
}

export default EmployeeForm;
