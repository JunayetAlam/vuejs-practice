<script setup lang="ts">
import type { User } from "@/types/user";
import { onMounted, ref } from "vue";

const users = ref<User[]>([]);
const isLoading = ref<boolean>(false);
const showAll = ref(false);
const fetchUsers = async () => {
  isLoading.value = true;
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  isLoading.value = false;
  users.value = await response.json();
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="text-white">
    <h1 class="font-bold text-3xl">User List</h1>

    <div>
      <div v-if="isLoading">User list Loading</div>
      <div v-else-if="!isLoading" class="grid grid-cols-2 gap-5">
        <div
          v-for="(user, index) in users.slice(0, showAll ? users.length : 6)"
          :key="user.id"
          class="overflow-hidden rounded-xl border border-gray-200 bg-white text-black shadow-sm transition-shadow hover:shadow-md"
        >
          <!-- Header -->
          <div class="border-b border-gray-200 p-6">
            <div class="flex items-center gap-4">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-black"
              >
                {{ index + 1 }} {{ user.name.charAt(0).toUpperCase() }}
              </div>

              <div class="min-w-0">
                <h2 class="text-lg font-semibold text-black">
                  {{ user.name }}
                </h2>
                <p class="text-sm text-gray-600">@{{ user.username }}</p>
                <span class="mt-1 inline-block text-xs text-gray-500">
                  User ID: #{{ user.id }}
                </span>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="border-b border-gray-200 p-6">
            <h3
              class="mb-4 text-sm font-semibold uppercase tracking-wide text-black"
            >
              Contact Information
            </h3>

            <div class="space-y-4">
              <div>
                <p class="text-xs text-gray-500">Email Address</p>
                <a
                  :href="`mailto:${user.email}`"
                  class="break-all text-sm font-medium text-black hover:underline"
                >
                  {{ user.email }}
                </a>
              </div>

              <div>
                <p class="text-xs text-gray-500">Phone Number</p>
                <a
                  :href="`tel:${user.phone}`"
                  class="text-sm font-medium text-black hover:underline"
                >
                  {{ user.phone }}
                </a>
              </div>

              <div>
                <p class="text-xs text-gray-500">Website</p>
                <a
                  :href="`https://${user.website}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="break-all text-sm font-medium text-black hover:underline"
                >
                  {{ user.website }}
                </a>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="border-b border-gray-200 p-6">
            <h3
              class="mb-4 text-sm font-semibold uppercase tracking-wide text-black"
            >
              Address
            </h3>

            <div class="space-y-3">
              <div>
                <p class="text-xs text-gray-500">Street</p>
                <p class="text-sm font-medium">
                  {{ user.address.street }}
                </p>
              </div>

              <div>
                <p class="text-xs text-gray-500">Suite</p>
                <p class="text-sm font-medium">
                  {{ user.address.suite }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-xs text-gray-500">City</p>
                  <p class="text-sm font-medium">
                    {{ user.address.city }}
                  </p>
                </div>

                <div>
                  <p class="text-xs text-gray-500">Zip Code</p>
                  <p class="text-sm font-medium">
                    {{ user.address.zipcode }}
                  </p>
                </div>
              </div>

              <div>
                <p class="text-xs text-gray-500">Geo Coordinates</p>
                <p class="text-sm font-medium">
                  Lat: {{ user.address.geo.lat }}
                </p>
                <p class="text-sm font-medium">
                  Lng: {{ user.address.geo.lng }}
                </p>
              </div>
            </div>
          </div>

          <!-- Company -->
          <div class="p-6">
            <h3
              class="mb-4 text-sm font-semibold uppercase tracking-wide text-black"
            >
              Company Information
            </h3>

            <div class="space-y-4">
              <div>
                <p class="text-xs text-gray-500">Company Name</p>
                <p class="text-sm font-semibold">
                  {{ user.company.name }}
                </p>
              </div>

              <div>
                <p class="text-xs text-gray-500">Catch Phrase</p>
                <p class="text-sm font-medium">
                  {{ user.company.catchPhrase }}
                </p>
              </div>

              <div>
                <p class="text-xs text-gray-500">Business Description</p>
                <p class="text-sm font-medium">
                  {{ user.company.bs }}
                </p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="border-t border-gray-200 bg-gray-50 px-6 py-4">
            <a
              :href="`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-semibold text-black hover:underline"
            >
              View Location on Google Maps →
            </a>
          </div>
        </div>
      </div>

      <button
        v-if="users.length > 6"
        @click="showAll = !showAll"
        class="cursor-pointer"
      >
        {{ showAll ? "Show Less" : "Show All" }}
      </button>
    </div>
  </div>
</template>
