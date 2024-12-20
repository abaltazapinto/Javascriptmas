import { workshopData } from "./data.js";

function countToysShipped(toysShipped) {
    const toyCounts = {};

    for (const location in toysShipped) {
        const shipments = toysShipped[location];

        if (typeof shipments === "object" && !Array.isArray(shipments)) {
            // Recursively count toys in sub-locations
            const subCounts = countToysShipped(shipments);
            for (const toy in subCounts) {
                toyCounts[toy] = (toyCounts[toy] || 0) + subCounts[toy];
            }
        } else if (Array.isArray(shipments)) {
            shipments.forEach((shipment) => {
                const { toy, count = 0 } = shipment;
                toyCounts[toy] = (toyCounts[toy] || 0) + count;
            });
        }
    }

    return toyCounts;
}

// Iterate over each elf and calculate shipped and made counts
workshopData.forEach((elf) => {
    console.log(`Elf name: ${elf.name}`);

    // Calculate toys shipped for the current elf
    const shippedCounts = countToysShipped(elf.toysShipped);

    // Compare toys made and shipped
    for (const toy in elf.toysMade) {
        const madeCount = elf.toysMade[toy];
        const shippedCount = shippedCounts[toy] || 0;

        console.log(`${toy}: Made ${madeCount}, Shipped ${shippedCount}`);

        if (madeCount > shippedCount) {
            console.warn(`Warning: More ${toy} shipped than made by ${elf.name}!`);
        }
    }

    console.log("\n");
});
