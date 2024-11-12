import axios from "axios";
import { BookingRequest, BookingResponse } from "../types/models";

const API_URL = "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com";
const API_KEY = "738c6b9d-24cf-47c3-b688-f4f4c5747662";

export const createBooking = async (
  bookingData: BookingRequest
): Promise<BookingResponse> => {
  const response = await axios.post<BookingResponse>(
    `${API_URL}/bookings`,
    bookingData,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );
  return response.data;
};
