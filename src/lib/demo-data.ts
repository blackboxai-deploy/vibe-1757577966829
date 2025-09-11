// Demo data for the class schedule planner

import { Subject, TimeSlot } from './types';

export const DEMO_SUBJECTS: Omit<Subject, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Mathematics',
    color: 'blue',
    instructor: 'Dr. Johnson',
    room: 'Room 201',
  },
  {
    name: 'Physics',
    color: 'green',
    instructor: 'Prof. Smith',
    room: 'Lab A',
  },
  {
    name: 'Chemistry',
    color: 'red',
    instructor: 'Dr. Wilson',
    room: 'Lab B',
  },
  {
    name: 'English Literature',
    color: 'purple',
    instructor: 'Ms. Davis',
    room: 'Room 305',
  },
  {
    name: 'History',
    color: 'orange',
    instructor: 'Mr. Brown',
    room: 'Room 102',
  },
  {
    name: 'Computer Science',
    color: 'teal',
    instructor: 'Dr. Garcia',
    room: 'Computer Lab',
  },
];

export const DEMO_TIME_SLOTS: (subjectIds: string[]) => Omit<TimeSlot, 'id' | 'createdAt' | 'updatedAt'>[] = (subjectIds) => [
  // Mathematics - Monday, Wednesday, Friday
  {
    subjectId: subjectIds[0], // Mathematics
    day: 'monday',
    startTime: '09:00',
    endTime: '10:30',
    room: 'Room 201',
    notes: 'Algebra and Calculus',
  },
  {
    subjectId: subjectIds[0], // Mathematics
    day: 'wednesday',
    startTime: '09:00',
    endTime: '10:30',
    room: 'Room 201',
    notes: 'Problem solving session',
  },
  {
    subjectId: subjectIds[0], // Mathematics
    day: 'friday',
    startTime: '09:00',
    endTime: '10:30',
    room: 'Room 201',
    notes: 'Quiz and review',
  },
  
  // Physics - Tuesday, Thursday
  {
    subjectId: subjectIds[1], // Physics
    day: 'tuesday',
    startTime: '11:00',
    endTime: '12:30',
    room: 'Lab A',
    notes: 'Mechanics and Motion',
  },
  {
    subjectId: subjectIds[1], // Physics
    day: 'thursday',
    startTime: '11:00',
    endTime: '12:30',
    room: 'Lab A',
    notes: 'Lab experiments',
  },
  
  // Chemistry - Monday, Wednesday
  {
    subjectId: subjectIds[2], // Chemistry
    day: 'monday',
    startTime: '14:00',
    endTime: '15:30',
    room: 'Lab B',
    notes: 'Organic Chemistry',
  },
  {
    subjectId: subjectIds[2], // Chemistry
    day: 'wednesday',
    startTime: '14:00',
    endTime: '15:30',
    room: 'Lab B',
    notes: 'Lab work and experiments',
  },
  
  // English Literature - Tuesday, Thursday
  {
    subjectId: subjectIds[3], // English Literature
    day: 'tuesday',
    startTime: '13:00',
    endTime: '14:00',
    room: 'Room 305',
    notes: 'Shakespeare studies',
  },
  {
    subjectId: subjectIds[3], // English Literature
    day: 'thursday',
    startTime: '13:00',
    endTime: '14:00',
    room: 'Room 305',
    notes: 'Essay writing workshop',
  },
  
  // History - Monday, Friday
  {
    subjectId: subjectIds[4], // History
    day: 'monday',
    startTime: '11:00',
    endTime: '12:00',
    room: 'Room 102',
    notes: 'World War II',
  },
  {
    subjectId: subjectIds[4], // History
    day: 'friday',
    startTime: '11:00',
    endTime: '12:00',
    room: 'Room 102',
    notes: 'Discussion and presentations',
  },
  
  // Computer Science - Wednesday, Friday
  {
    subjectId: subjectIds[5], // Computer Science
    day: 'wednesday',
    startTime: '16:00',
    endTime: '17:30',
    room: 'Computer Lab',
    notes: 'Data Structures and Algorithms',
  },
  {
    subjectId: subjectIds[5], // Computer Science
    day: 'friday',
    startTime: '16:00',
    endTime: '17:30',
    room: 'Computer Lab',
    notes: 'Programming assignments',
  },
];

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export function createDemoData(): { subjects: Subject[], timeSlots: TimeSlot[] } {
  const now = new Date();
  
  // Create subjects with IDs
  const subjects: Subject[] = DEMO_SUBJECTS.map(subject => ({
    ...subject,
    id: generateId(),
    createdAt: now,
    updatedAt: now,
  }));
  
  // Get subject IDs
  const subjectIds = subjects.map(s => s.id);
  
  // Create time slots with subject IDs
  const timeSlots: TimeSlot[] = DEMO_TIME_SLOTS(subjectIds).map(timeSlot => ({
    ...timeSlot,
    id: generateId(),
    createdAt: now,
    updatedAt: now,
  }));
  
  return { subjects, timeSlots };
}