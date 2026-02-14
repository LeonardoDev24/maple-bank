CREATE table creditCards (
    id INTEGER PRIMARY KEY,
    cardName TEXT NOT NULL,
    annualFee INTEGER NOT NULL,
    description TEXT NOT NULL,
    benefits TEXT,
    CAT INTEGER NOT NULL,
    interestRate INTEGER NOT NULL
);

CREATE table debitAccounts (
    id INTEGER PRIMARY KEY,
    accountName TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE table credits (
    id INTEGER PRIMARY KEY,
    accountName TEXT NOT NULL,
    description TEXT NOT NULL
);