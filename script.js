// * Generate a fantasy name based on user input
const generatePrefix = (firstName) => {
	const length = firstName.length;
	if (length > 5) {
		return "Lord";
	} else if (length > 3) {
		return "Sir";
	} else {
		return "Master";
	}
};

// * Capitalize the first letter of the first name
const generateFirstName = (firstName) =>
	firstName.charAt(0).toUpperCase() + firstName.slice(1);

// * Generate a middle name based on the road type and favorite color
const generateMiddleName = (roadType, favoriteColor) => {
	const roadMap = {
		road: `${favoriteColor}field`,
		circle: `${favoriteColor}circle`,
		street: `${favoriteColor}street`,
		avenue: `${favoriteColor}avenue`,
		other: `${favoriteColor}ville`,
	};
	return roadMap[roadType] || `${favoriteColor}stone`;
};

// * Generate a last name based on the last letter of the user's last name
const generateLastName = (lastName) => {
	const lastLetter = lastName.slice(-1).toLowerCase();
	switch (lastLetter) {
		case "a":
			return "Alpha";
		case "b":
			return "Blaze";
		case "c":
			return "Charlie";
		case "d":
			return "Delta";
		case "e":
			return "Echo";
		case "f":
			return "Foxtrot";
		default:
			return "Zulu";
	}
};

// * Generate a suffix based on the user's favorite animal
const generateSuffix = (favoriteAnimal) => `of the ${favoriteAnimal} clan`;

// * Generate the full name
const generateFullName = () => {
	const { value: firstName } = document.getElementById("firstName");
	const { value: lastName } = document.getElementById("lastName");
	const { value: roadType } = document.getElementById("roadType");
	const { value: favoriteColor } = document.getElementById("favoriteColor");
	const { value: favoriteAnimal } = document.getElementById("favoriteAnimal");

	if (
		!firstName.trim() ||
		!lastName.trim() ||
		!roadType ||
		!favoriteColor.trim() ||
		!favoriteAnimal.trim()
	) {
		alert("Please fill in all fields.");
		return;
	}

	const prefix = generatePrefix(firstName.trim());
	const first = generateFirstName(firstName.trim());
	const middle = generateMiddleName(roadType, favoriteColor.trim());
	const last = generateLastName(lastName.trim());
	const suffix = generateSuffix(favoriteAnimal.trim());

	const fullName = `${prefix} ${first} ${middle} ${last} ${suffix}`;
	document.getElementById("generated-name").textContent = fullName;
};

// * Event listener for the form submission
document.getElementById("fantasy-form").addEventListener("reset", () => {
	document.getElementById("generated-name").textContent = "";
});
