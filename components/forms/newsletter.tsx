'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const defaults = {
  email: '',
  firstName: '',
  lastName: '',
  subscribe: false
};

const ContactForm = () => {
  const [error, setError] = useState(null);
  const { handleSubmit, reset, register } = useForm({
    defaultValues: defaults
  });

  const submitFn = async (vals: any) => {
    const { firstName, lastName, email } = vals;
    const subscribingUser = {
      firstName,
      lastName,
      email
    };
    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscribingUser)
      });
      const data = await response.json();
      console.log(data, 'this is the data i get back');
      if (data.error) {
        throw new Error(data.error || 'Something went wrong!');
      }
    } catch (error: any) {
      setError(error);
      console.log(error, 'this is the error');
    }
    reset(defaults);
  };

  return (
    <div className="m-auto flex max-w-xl flex-col items-center">
      <form
        className="flex w-full flex-col items-center justify-center gap-4 text-white"
        onSubmit={handleSubmit(submitFn)}
      >
        <input
          className="w-full rounded-full border-2 border-accent bg-primary p-2 font-sans placeholder:font-bold placeholder:uppercase placeholder:text-white"
          {...register('firstName')}
          placeholder="First Name"
        />
        <input
          className="w-full rounded-full border-2 border-accent bg-primary p-2 font-sans placeholder:font-bold placeholder:uppercase placeholder:text-white"
          {...register('lastName')}
          placeholder="Last Name"
        />
        <input
          className="w-full rounded-full border-2 border-accent bg-primary p-2 font-sans placeholder:font-bold placeholder:uppercase placeholder:text-white"
          {...register('email')}
          placeholder="Email"
        />
        <button
          className="inline-block w-1/3 rounded-full bg-accent p-4 font-bold uppercase text-primary"
          type="submit"
        >
          Join
        </button>
      </form>
      {error && (
        <p className="mt-2 inline-block rounded-full bg-black p-2 text-center">
          Error or Already Subscribed
        </p>
      )}
    </div>
  );
};

export default ContactForm;
