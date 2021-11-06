import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  cnicNumber: "",
  description: "",
  instituteName: "",
  CGPA: 0,
  educationStream: "",
  percentageMatric: "",
  percentageIntermediate: "",
  gradeOlevels: "",
  gradeAlevels: "",
  experienceYear: 0,
  experienceSchool: "",
  specialisation: "",
  address: "",
  teachingMode: [],
  homeBasedLocation: {},
  physicalTeachingLocations: [],
  certificatesName: [],
  certificatePictures: [],
  streams: [],
  assignmentSubjects: [""],
  active: false,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    update(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const formDataActions = formDataSlice.actions;
export default formDataSlice.reducer;
