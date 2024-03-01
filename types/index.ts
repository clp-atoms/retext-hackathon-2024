export type User = {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
  roles: string[];
  dateOfHire: string;
  industry: string;
  jobRole: string;
  buddy: string;
  attachments: {
    name: string;
    url: string;
  }[];
  hrDetails: {
    label: string;
    value: string;
  }[];
};
