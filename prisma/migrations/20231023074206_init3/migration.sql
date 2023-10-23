-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "resumeUrl" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "selected" BOOLEAN NOT NULL DEFAULT false,
    "jobId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("jobId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Application" ("createdAt", "email", "githubUrl", "id", "jobId", "linkedinUrl", "name", "phone", "resumeUrl", "selected", "updatedAt") SELECT "createdAt", "email", "githubUrl", "id", "jobId", "linkedinUrl", "name", "phone", "resumeUrl", "selected", "updatedAt" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
CREATE UNIQUE INDEX "Application_email_key" ON "Application"("email");
CREATE UNIQUE INDEX "Application_phone_key" ON "Application"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
