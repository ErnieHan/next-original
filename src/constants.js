let root
let public_name
let host_url

// development env for 'npm run dev'
if (process.env.NODE_ENV === 'development') {
  host_url = process.env.NEXT_PUBLIC_API_HOST_NAME_DEV
  // testing env
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'testing') {
  host_url = process.env.NEXT_PUBLIC_API_HOST_NAME_TESTING
  // uat env
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'uat') {
  host_url = process.env.NEXT_PUBLIC_API_HOST_NAME_UAT
  // production env
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'prod') {
  host_url = process.env.NEXT_PUBLIC_API_HOST_NAME_PROD
}

export const ROOT = root
export const PUBLIC_NAME = public_name
export const HOST_URL = host_url
