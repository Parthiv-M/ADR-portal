interface FormStateType {
    wasThereAHistoryOfAllergyOrPreviousReactionsToTheDrug?: BooleanTypes | null;
    wasTheDrugInvolvedInappropriateForThePatientsClinicalCondition?: BooleanTypes | null;
    wasTheDoseRouteOrFrequencyOfAdministrationInappropriateForThePatientsAgeWeightOrDiseaseState?: BooleanTypes | null;
    wasAToxicSerumDrugConcentrationOrLaboratoryMonitoringTestDocumented?: BooleanTypes | null;
    wasThereAKnownTreatmentForTheAdverseDrugReaction?: BooleanTypes | null;
    wasRequiredTherapeuticDrugMonitoringOrOtherNecessaryLabTestsPotPerformed?: BooleanTypes | null;
    wasADrugInteractionInvolvedInTheADR?: BooleanTypes | null;
    finalResult?: FinalResultTypes | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum BooleanTypes {
    Yes = "Yes",
    No = "No",
}

enum FinalResultTypes {
    DefinitelyPreventable = "Definitely Preventable",
    ProbablyPreventable = "Probably Preventable",
    NotPreventable = "Not Preventable",
}

export type { ActionType, FormStateType };