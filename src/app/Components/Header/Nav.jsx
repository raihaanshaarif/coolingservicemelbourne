import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            {/* Split System */}
            <li className="menu-item-has-children">
              <Link
                href="/service/split-system"
                onClick={() => setMobileToggle(false)}
              >
                <span className="d-flex justify-content-between align-items-center w-100">
                  Split System
                  <i className="bi bi-chevron-right"></i>
                </span>
              </Link>

              <DropDown>
                <ul>
                  <li>
                    <Link
                      href="/service/split-system/split-system-installation-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Split System Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/split-system/split-system-repair-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Split System Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/split-system/split-system-service-tune-up-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Split System Service & Tune‑Up
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service/split-system/emergency-split-system-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Split System Repairs
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            {/* Ducted System */}
            <li className="menu-item-has-children">
              <Link
                href="/service/ducted-system"
                onClick={() => setMobileToggle(false)}
              >
                <span className="d-flex justify-content-between align-items-center w-100">
                  Ducted System
                  <i className="bi bi-chevron-right"></i>
                </span>
              </Link>

              <DropDown>
                <ul>
                  <li>
                    <Link
                      href="/service/ducted-system/ducted-system-installation-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Ducted System Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/ducted-system/ducted-system-repair-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Ducted System Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/ducted-system/duct-cleaning-airflow-balancing-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Duct Cleaning & Airflow Balancing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/ducted-system/ducted-system-service-maintenance-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Ducted System Service & Maintenance
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service/ducted-system/emergency-ducted-system-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Ducted Repairs
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            {/* Evaporative System */}
            <li className="menu-item-has-children">
              <Link
                href="/service/evaporative-system"
                onClick={() => setMobileToggle(false)}
              >
                <span className="d-flex justify-content-between align-items-center w-100">
                  Evaporative System
                  <i className="bi bi-chevron-right"></i>
                </span>
              </Link>

              <DropDown>
                <ul>
                  <li>
                    <Link
                      href="/service/evaporative-system/evaporative-cooling-installation-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Evaporative Cooling Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/evaporative-system/evaporative-system-repair-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Evaporative System Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/evaporative-system/seasonal-service-replacement-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Seasonal Service & Replacement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/evaporative-system/water-management-leak-repair-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Water Management & Leak Repair
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/service/evaporative-system/emergency-evaporative-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Evaporative Repairs
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>

            {/* Emergency Services */}
            <li className="menu-item-has-children">
              <Link
                href="/service/emergency"
                onClick={() => setMobileToggle(false)}
              >
                <span className="d-flex justify-content-between align-items-center w-100">
                  Emergency Services
                  <i className="bi bi-chevron-right"></i>
                </span>
              </Link>

              <DropDown>
                <ul>
                  <li>
                    <Link
                      href="/service/emergency/emergency-split-system-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Split System Repairs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/emergency/emergency-ducted-system-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Ducted System Repairs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/emergency/emergency-evaporative-cooling-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Evaporative Cooling Repairs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/emergency/emergency-aircon-repair-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      Emergency Air Conditioning Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service/emergency/24-hour-cooling-repairs-melbourne"
                      onClick={() => setMobileToggle(false)}
                    >
                      24 Hour Cooling Repairs
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link href="/service-areas" onClick={() => setMobileToggle(false)}>
          Service Areas
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/brands">Brands</Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
