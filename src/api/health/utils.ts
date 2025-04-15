/** @format */

import prettyMs from 'pretty-ms';

// Cache CPU, memory usage, and uptime
let cachedCpuUsage: NodeJS.CpuUsage = process.cpuUsage();
let cachedMemoryUsage: NodeJS.MemoryUsage = process.memoryUsage();
let cachedUptime = prettyMs(process.uptime());

// Update cached values periodically
setInterval(() => {
	cachedCpuUsage = process.cpuUsage();
	cachedMemoryUsage = process.memoryUsage();
}, 1000); // Update every second

// Function to get cached CPU usage
export const getCachedCpuUsage = (): NodeJS.CpuUsage => cachedCpuUsage;

// Function to get cached memory usage
export const getCachedMemory = (): NodeJS.MemoryUsage => cachedMemoryUsage;

// Cache uptime to avoid recalculating it for every request
setInterval(() => {
	cachedUptime = prettyMs(process.uptime());
}, 1000); // Update every second

// Function to get cached uptime
export const getCachedUptime = (): string => cachedUptime;
