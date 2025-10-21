import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          EnergyPath Portal
        </h1>
        <p className="text-gray-600 mb-8">
          Gas Cylinder Management System
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/routes">
            <Button size="lg">
              Routes Management →
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline">
              View Layout Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
