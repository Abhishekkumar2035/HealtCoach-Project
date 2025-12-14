// src/services/localStorageService.js

// Coach data storage
export const coachService = {
  getCoaches: () => {
    const coaches = localStorage.getItem("healthCoaches");
    return coaches ? JSON.parse(coaches) : [];
  },

  saveCoach: (coach) => {
    const coaches = coachService.getCoaches();
    coaches.push(coach);
    localStorage.setItem("healthCoaches", JSON.stringify(coaches));
    return coach;
  },

  getCoachById: (id) => {
    const coaches = coachService.getCoaches();
    return coaches.find((coach) => coach.id === id);
  },

  updateCoach: (id, updatedCoach) => {
    const coaches = coachService.getCoaches();
    const index = coaches.findIndex((coach) => coach.id === id);
    if (index !== -1) {
      coaches[index] = { ...coaches[index], ...updatedCoach };
      localStorage.setItem("healthCoaches", JSON.stringify(coaches));
      return coaches[index];
    }
    return null;
  },

  deleteCoach: (id) => {
    const coaches = coachService.getCoaches();
    const filteredCoaches = coaches.filter((coach) => coach.id !== id);
    localStorage.setItem("healthCoaches", JSON.stringify(filteredCoaches));
  },
};

// Blog data storage
export const blogService = {
  getBlogs: () => {
    const blogs = localStorage.getItem("healthBlogs");
    return blogs ? JSON.parse(blogs) : [];
  },

  saveBlog: (blog) => {
    const blogs = blogService.getBlogs();
    blogs.push(blog);
    localStorage.setItem("healthBlogs", JSON.stringify(blogs));
    return blog;
  },

  getBlogById: (id) => {
    const blogs = blogService.getBlogs();
    return blogs.find((blog) => blog.id === id);
  },
};

// Contact form submissions
export const contactService = {
  getSubmissions: () => {
    const submissions = localStorage.getItem("contactSubmissions");
    return submissions ? JSON.parse(submissions) : [];
  },

  saveSubmission: (submission) => {
    const submissions = contactService.getSubmissions();
    submissions.push({
      ...submission,
      id: Date.now(),
      date: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    return submission;
  },
};

// Pricing plans
export const pricingService = {
  getPlans: () => {
    const plans = localStorage.getItem("pricingPlans");
    if (!plans) {
      const defaultPlans = [
        {
          id: 1,
          name: "Starter",
          description: "A Beautiful Healthcare",
          price: 49,
          features: [
            "20 Workouts",
            "Meal plans in mobile",
            "One Coaching",
            "-50% Group coaching",
            "24/7 Customer support",
          ],
        },
        {
          id: 2,
          name: "Standard",
          description: "A Beautiful Healthcare",
          price: 79,
          features: [
            "20 Workouts",
            "Meal plans in mobile",
            "One Coaching",
            "-50% Group coaching",
            "24/7 Customer support",
          ],
        },
        {
          id: 3,
          name: "Premium",
          description: "A Beautiful Healthcare",
          price: 109,
          features: [
            "20 Workouts",
            "Meal plans in mobile",
            "One Coaching",
            "-50% Group coaching",
            "24/7 Customer support",
          ],
        },
        {
          id: 4,
          name: "Platinum",
          description: "A Beautiful Healthcare",
          price: 159,
          features: [
            "20 Workouts",
            "Meal plans in mobile",
            "One Coaching",
            "-50% Group coaching",
            "24/7 Customer support",
          ],
        },
      ];
      localStorage.setItem("pricingPlans", JSON.stringify(defaultPlans));
      return defaultPlans;
    }
    return JSON.parse(plans);
  },

  updatePlan: (id, updatedPlan) => {
    const plans = pricingService.getPlans();
    const index = plans.findIndex((plan) => plan.id === id);
    if (index !== -1) {
      plans[index] = { ...plans[index], ...updatedPlan };
      localStorage.setItem("pricingPlans", JSON.stringify(plans));
      return plans[index];
    }
    return null;
  },
};

// User preferences
export const userService = {
  getUserPreferences: () => {
    const prefs = localStorage.getItem("userPreferences");
    return prefs
      ? JSON.parse(prefs)
      : {
          theme: "light",
          language: "en",
          notifications: true,
        };
  },

  saveUserPreferences: (preferences) => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    return preferences;
  },
};
