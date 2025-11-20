"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'abdelaziz.allem@gmail.com' },
        update: {},
        create: {
            name: 'Abdelaziz',
            mobileNumber: '634688444',
            email: 'abdelaziz.allem@gmail.com',
            password: '$2a$10$MCSj7HG/7qFUhokhgVN8HOdI1ae.A6ztpne/fXThNA1DKSR1YJw.O',
            gender: client_1.Gender.Male,
        },
    });
    const tenant = await prisma.tenant.create({
        data: {
            name: 'demo',
            email: 'demo@gmail.com',
            registrationFee: 10,
            mobileNumber: '634688444',
            address: 'Address 1',
            slogan: 'Slogan 1',
            incomeTax: 10,
            salaryTax: 6,
        },
    });
    await prisma.userTenant.create({
        data: {
            userId: user.id,
            tenantId: tenant.id,
            role: 'SuperAdmin',
        },
    });
    await prisma.academicYear.create({
        data: {
            name: '2021/2022',
            startDate: new Date('2021-09-01'),
            endDate: new Date('2022-08-31'),
            tenantId: tenant.id,
        },
    });
    await prisma.subject.create({
        data: {
            name: 'Break',
            tenantId: tenant.id,
        },
    });
    console.log('✅ Seeding completed!');
}
main()
    .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map