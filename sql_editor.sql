DROP TYPE IF EXISTS "public"."ChannelType";
DROP TYPE IF EXISTS "public"."MemberRole";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "Profile" (
    "id" VARCHAR(191) PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    "userId" VARCHAR(191) UNIQUE NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    "updatedAt" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "Server" (
    "id" VARCHAR(191) PRIMARY KEY NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "inviteCode" VARCHAR(191) UNIQUE NOT NULL,
    "profileId" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    CONSTRAINT "Server_profileId_idx" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE CASCADE
);

CREATE TYPE "public"."ChannelType" AS ENUM ('TEXT', 'AUDIO', 'VIDEO');
CREATE TABLE "Channel" (
    "id" VARCHAR(191) PRIMARY KEY NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "type" "public"."ChannelType" NOT NULL DEFAULT 'TEXT',
    "profileId" VARCHAR(191) NOT NULL,
    "serverId" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    CONSTRAINT "Channel_profileId_idx" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id"),
    CONSTRAINT "Channel_serverId_idx" FOREIGN KEY ("serverId") REFERENCES "Server" ("id") ON DELETE CASCADE
);

CREATE TYPE "public"."MemberRole" AS ENUM ('ADMIN', 'MODERATOR', 'GUEST');
CREATE TABLE "Member" (
    "id" VARCHAR(191) PRIMARY KEY NOT NULL,
    "role" "public"."MemberRole" NOT NULL DEFAULT 'GUEST',
    "profileId" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "serverId" VARCHAR(191) NOT NULL,
    CONSTRAINT "Member_profileId_idx" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id"),
    CONSTRAINT "Member_serverId_idx" FOREIGN KEY ("serverId") REFERENCES "Server" ("id")
);