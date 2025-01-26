'use client';
import React, { useState } from 'react';
import { PencilLineIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import Image from 'next/image';
import { Input } from '../components/ui/input';
import clone from 'clone';

interface IProfileCardProps {
  email: string;
}
interface IProfileEntry {
  value: string;
  label: string;
}
interface IUserProfile {
  name: IProfileEntry;
  phone_number: IProfileEntry;
  address: IProfileEntry;
  province: IProfileEntry;
  country: IProfileEntry;
  profession: IProfileEntry;
  marital_status: IProfileEntry;
}

const DEFAULT_PROFILE: IUserProfile = {
  name: {
    value: 'John Doe',
    label: 'Name',
  },
  phone_number: {
    value: '123-456-7890',
    label: 'Phone Number',
  },
  address: {
    value: '1234 Elm St',
    label: 'Address',
  },
  province: {
    value: 'Ontario',
    label: 'Province',
  },
  country: {
    value: 'Canada',
    label: 'Country',
  },
  profession: {
    value: 'Software Engineer',
    label: 'Profession',
  },
  marital_status: {
    value: 'Single',
    label: 'Marital Status',
  },
};

const ProfileCard = ({ email }: IProfileCardProps) => {
  const [userProfile, setUserProfile] = useState<IUserProfile>(clone(DEFAULT_PROFILE));
  const [profileDraft, setProfileDraft] = useState<IUserProfile>(clone(DEFAULT_PROFILE));
  const fields = ['name', 'phone_number', 'address', 'province', 'country', 'profession', 'marital_status'];
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => {
    setProfileDraft(clone(userProfile));
    setIsEditing(true);
  };
  const handleSave = async () => {
    setIsEditing(false);
    const updatingData: { [key: string]: string } = {};
    fields.forEach(field => {
      updatingData[field] = profileDraft[field as keyof IUserProfile].value;
    });
    updatingData.email = email;
    console.log(updatingData);
    const response = await fetch('/api/user_profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_profile: updatingData }),
    });
    if (!response.ok) {
      console.error('Failed to save profile');
      return;
    } else {
      console.log('Profile saved');
    }
    setUserProfile(clone(profileDraft));
  };
  const handleCancel = () => {
    setIsEditing(false);
    setProfileDraft(clone(DEFAULT_PROFILE));
  };
  const handleInput = (field: keyof IUserProfile) => (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, field);
    setProfileDraft(prev => ({ ...prev, [field]: { ...prev[field], value: e.target.value } }));
  };
  return (
    <div
      className="mx-auto mt-16 bg-customYellow1 rounded-2xl overflow-hidden pt-10 pb-4"
      style={{ width: '80%', boxShadow: '10px 10px 15px 0px rgba(85,85,85,1' }}>
      <div className="flex bg-slate-800 text-white py-4 px-8 justify-between content-center text-2xl">
        <div>My Profile</div>
        {!isEditing && (
          <Button onClick={startEditing} variant="ghost" className="flex items-center">
            <PencilLineIcon size={24} />
          </Button>
        )}
        {isEditing && (
          <div className="flex">
            <Button
              onClick={handleSave}
              variant="outline"
              className="flex items-center text-white bg-green-600 text-lg">
              Save
            </Button>
            <Button
              onClick={handleCancel}
              variant="outline"
              className="flex items-center text-white bg-amber-500 text-lg ml-2">
              Cancel
            </Button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center" style={{ width: '35%' }}>
          <Image
            alt={`${userProfile.name.value}'s profile picture`}
            width={64}
            height={64}
            style={{
              borderRadius: '50%',
            }}
            src="https://github.com/shadcn.png"
          />
        </div>
        <div style={{ width: '65%' }}>
          <div className="flex items-center my-2" style={{ height: '36px' }}>
            <div
              className="text-sm font-medium"
              style={{
                flexBasis: '50%',
              }}>
              Email:
            </div>
            <div>{email}</div>
          </div>
          {fields.map(field => {
            const { value, label } = profileDraft[field as keyof IUserProfile];
            return (
              <div key={label} className="flex items-center my-2" style={{ height: '36px' }}>
                <div
                  className="text-sm font-medium"
                  style={{
                    flexBasis: '50%',
                  }}>
                  {label}:
                </div>
                {isEditing ? (
                  <Input
                    className="border-amber-700"
                    type="text"
                    value={value}
                    style={{
                      flexBasis: '50%',
                    }}
                    onChange={handleInput(field as keyof IUserProfile)}
                  />
                ) : (
                  <div>{value}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
