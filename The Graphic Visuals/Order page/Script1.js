// JavaScript code for dynamic subcategory options

// Map category names to their corresponding subcategories
const subcategoriesMap = {
  "Logo Design": ["Logo Creation", "Brand Identity"],
  "Website Design": ["UI/UX Design", "Responsive Design"],
  "Print Design": ["Brochure Design", "Flyer Design"]
  "Print Design": ["Brochure Design", "Flyer Design"]

  // Add more category-subcategory mappings as needed
};

// Function to populate subcategories based on the selected category
function populateSubcategories() {
  const categorySelect = document.getElementById("category");
  const subcategorySelect = document.getElementById("subcategory");

  const selectedCategory = categorySelect.value;
  const subcategories = subcategoriesMap[selectedCategory];

  // Clear existing options
  subcategorySelect.innerHTML = "";

  if (subcategories) {
    // Create and append subcategory options
    subcategories.forEach((subcategory) => {
      const option = document.createElement("option");1q
      option.value = subcategory;
      option.text = subcategory;
      subcategorySelect.appendChild(option);
    });
  }
}

// Add event listener to the category select element
document.getElementById("category").addEventListener("change", populateSubcategories);
<script src="script.js"></script>
