// Generate Prefix
function generatePrefix(firstName) {
	return firstName.length > 5 ? "The Great" : "Master"; // ternary operator
}

// Generate first name.
function generateFirstName(firstName) {
	const firstLetter = firstName.charAt(0).toLowerCase();
	if (firstLetter === "a") {
		return "Alpha";
	}
	if (firstLetter === "b") {
		return "Beta";
	}
	if (firstLetter === "c") {
		return "Charlie";
	}
	if (firstLetter === "d") {
		return "Delta";
	}
	if (firstLetter === "e") {
		return "Echo";
	}
	if (firstLetter === "f") {
		return "Foxtrot";
	} else {
		return "Zulu";
	}
}

function generateMiddleName(roadType, favoriteColor) {
	if (roadType === "road") {
		return `${favoriteColor}ridge`;
	}
	if (roadType === "circle") {
		return `${favoriteColor}wood`;
	}
	if (roadType === "street") {
		return `${favoriteColor}ton`;
	}
	if (roadType === "avenue") {
		return `${favoriteColor}field`;
	}
	if (roadType === "other") {
		return `${favoriteColor}ville`;
	} else {
		return `${favoriteColor}stone`;
	}
}

// Generate last name
function generateLastName(lastName) {
	const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
	if (lastLetter === "a") {
		return "Alpha";
	}
	if (lastLetter === "b") {
		return "Blaze";
	}
	if (lastLetter === "c") {
		return "Charlie";
	}
	if (lastLetter === "d") {
		return "Delta";
	}
	if (lastLetter === "e") {
		return "Echo";
	}
	if (lastLetter === "f") {
		return "Foxtrot";
	} else {
		return "Zulu";
	}
}

// Generate suffix
function generateSuffix(favoriteAnimal) {
	return `of the ${favoriteAnimal} clan.`;
}

// Generate full name
function generateFullName() {
    // Get the user's inputs from HTML form and store them in variables. Run the functions to generate the name parts. Capitalize the first letter of each name part.
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const roadType = document.getElementById("roadType").value;
    const favoriteColor = document.getElementById("favoriteColor").value.trim();
    const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

    const prefix = generatePrefix(firstName);
    const first = generateFirstName(firstName);
    const middle = generateMiddleName(roadType, favoriteColor);
    const last = generateLastName(lastName);
    const suffix = generateSuffix(favoriteAnimal);

    const capitalizedprefix =  capitalizeFirstLetter(firstName);
    const capitalizedfirst =  capitalizeFirstLetter(firstName);
    const capitalizedmiddle =  capitalizeFirstLetter(roadType, favoriteColor);
    const capitalizedlast =  capitalizeFirstLetter(lastName);

	// Combine the name parts to create the full name.
	const fullName = `${prefix} ${first} ${middle} ${last} ${suffix}`;
	const capitalizedFullName = `${capitalizedprefix} ${capitalizedfirst} ${capitalizedmiddle} ${capitalizedlast} ${suffix}`;

	// Display the full name in the HTML.
	document.getElementById("generated-name").textContent = fullName;


}

// capitalizion function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}