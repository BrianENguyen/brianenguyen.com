<script setup>
import { isDark } from '../../composables/dark';

const latestCommitDate = useState('latest-commit-date', () => null);

fetch('https://api.github.com/repos/buraiyen/brianenguyen.com/branches/main')
  .then(res => res.json())
  .then(data => {
    const retrievedDate = new Date(data.commit.commit.committer.date)
    latestCommitDate.value = formatDate(retrievedDate)
  })

function formatDate(date) {
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${dayOfWeek}. ${day} ${month}, ${year} @ ${hours}:${minutes}:${seconds} (CT)`;
}
</script>

<template>
  <footer
    class="dark:bg-[#171717] text-center border-t-gray-light border-t-solid border-t-1 mt-8"
  >
    <div class="mx-auto px-4 py-5">
      <div class="grid zero:grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <!-- Email -->
        <div>
          <a href="mailto:hello@brianenguyen.com">hello@brianenguyen.com</a>
        </div>
        <!-- Brand -->
        <div>
          <img
            :src="isDark ? 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_110/v1662578878/BEN_Website/BEN-logo-navbar.webp' : 'https://res.cloudinary.com/buraiyen/image/upload/v1620240495/BEN_Website/BEN-logo-black.png' "
            width="150px"
            height="100px"
            class="w-150px h-100px"
            loading="lazy"
            alt="BEN Logo"
          />
        </div>
        <!-- Icons -->
        <div class="flex items-center flex-row justify-center mb-4">
          <a href="https://www.linkedin.com/in/brian-e-nguyen/" target="_blank">
            <div class="i-bxl-linkedin-square text-5xl mx-2" />
          </a>
          <a href="https://github.com/BrianENguyen/" target="_blank">
            <div class="i-bxl-github text-5xl mx-2" />
          </a>
          <a href="https://www.instagram.com/buraiyen_" target="_blank">
            <div class="i-bxl-instagram text-5xl mx-2" />
          </a>
        </div>
      </div>
      <div class="border-t-gray-light border-t-solid border-t-1 dark:text-gray">
        <p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            >CC BY-NC-SA 4.0</a
          >
          2023-PRESENT &copy; Brian Nguyen
        </p>

        <p>Latest site update on {{ latestCommitDate }}</p>
        <p>
          See an issue?
          <a href="https://github.com/BrianENguyen/brianenguyen.com/pulls"
            >Submit a pull request!</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
