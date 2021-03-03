export interface Member {

    MemberId?: number;

    FirstName?: string;


    MiddleName?: string;


    LastName?: string;


    FullName?: string;


    Dob?: Date;


    PolicyId?: object;

    PolicyNumber?: object;

    IsGroupPolicy?: boolean;

    ApplicationId?: object;

    ContactBaseId?: number;

    MemberStatus?: string;

    MemberStatusId?: number;
    PremiumValue?: string;

    PolicyStatus?: object;
    PolicyCountryId?: number;

    PolicyCountry?: object;

    InsuranceBusinessName?: object;

    InsuranceBusinessId?: number;

    RelationTypeId?: number;

    RelationType?: string;

    GenderId?: number;

    Gender?: string;

    SearchDate?: Date;

    ReferenceNumber?: object;

    RequesterName?: object;

    TransactionId?: number;

    DeductibleId?: number;

    BenefitCurrencyCode?: string;

    DeductibleValue?: string;

    MaximumCoverageValue?: string;

    Plan?: string;

    WWperiod?: boolean;

    Address?: object;

    Email?: string;

    PlanDescription?: string;

    LastEligibilityDate?: Date;

    StartDate?: object;

    EndDate?: object;

    Discount?: object;

    WaitPeriod?: string;

    HasTelemedicine?: boolean;

    Phone?: string;

    CodeAreaPhone?: string;

    EmailAddress?: string;

    // Emails  ?:List<Email>

    // Phones  ?: List<Phone>

    TelemedicineId?: object;


}
export interface PolicyMenber {

    PolicyId?: number;

    LegacyNumber?: string;

    PolicyReference?: string;

    PolicyStatusId?: number;

    PolicyStatus?: string;

    ModeOfPayment?: string;

    PolicyCountryId?: number;

    PolicyCountry?: string;

    ModeOfPaymentId?: number;

    PaymentStatus?: object;

    PaymentDate?: object;

    DaysToPay?: number;

    IsGroupPolicy?: number;

    AmountToPay?: number;

    PolicyPremium?: string;

    AmountUSDToPay?: number;

    GroupId?: number;

    GroupName?: string;

    CurrencySymbol?: string;

    CurrencyId?: number;

    CurrencyCode?: string;

    ExchangeRate?: number;

    Plan?: string;

    PlanId?: number;

    DeductibleId?: number;

    ProductId?: number;

    ProductName?: string;

    Language?: string;

    LanguageId?: number;

    Paperless?: number;

    PrintIdCard?: number;

    HasGeoBlueIdCard?: number;

    FixedRate?: object;

    PlanDescription?: string;

    DependentPremium?: string;

    FirstName?: string;

    MiddleName?: string;

    LastName?: string;

    MemberId?: number;

    OwnerDob?: string;

    RelationTypeId?: object;

    InsuranceBusinessId?: number;

    PhoneNumber?: string;

    AddressLine?: string;

    City?: string;

    ZipCode?: string;

    State?: string;

    Country?: string;

    PostalAddressLine?: string;

    PostalCity?: string;

    PostalZipCode?: string;

    PostalState?: string;

    PostalCountry?: string;

    AgentName?: string;

    AgentNumber?: object;

    AgentEmail?: string;

    DateApplicationReceived?: string;

    DateRenewal?: string;

    DatePolicyIssue?: string;

    // member:  Array<Member>;

    // Members: string[new Member()];

    // Members ?: arrays(<Member>;
}

