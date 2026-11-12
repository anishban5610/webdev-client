"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number];

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Omit<Assignment, "_id"> & { _id?: string }) => void;
  updateAssignment: (assignment: Partial<Assignment> & { _id: string }) => void;
  deleteAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson,
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((existing) =>
        existing._id === assignment._id
          ? { ...existing, ...assignment }
          : existing
      ),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      ),
    })),
}));
